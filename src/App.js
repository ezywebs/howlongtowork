import styled from "styled-components";
import "./App.css";
import SearchBar from "./components/SearchBar";
import IncomeInput from "./components/IncomeInput";
import Message from "./components/Message";
import { useEffect, useState } from "react";
import { calculatePeriods, isEmptyObj, boolFromNum } from "./utils";
import Footer from "./components/Footer";
import PeopleRowContainer from "./containers/PeopleRow/PeopleRowContainer";
import IncomeBreakDownContainer from "./containers/IncomeBreakDown";

const StyledContainer = styled.main`
  background-color: #ecf0f1;
  color: #2c3e50;
  h1 {
    text-align: center;
    font-size: 2em;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

function App() {
  const [targetPerson, setTargetPerson] = useState({});
  const [people, setPeople] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [income, setIncome] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [currencies, setCurrencies] = useState({});
  const [currencyCode, setCurrencyCode] = useState("usd");
  const [currencyRate, setCurrencyRate] = useState(1);

  const getPeople = async () => {
    try {
      const response = await fetch(
        "https://forbes400.herokuapp.com/api/forbes400"
      );
      const json = await response.json();
      return json;
    } catch (e) {
      setIsLoading(false);
    }
  };

  const getCurrencies = async (defaultCurrency = "usd") => {
    try {
      const response = await fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${defaultCurrency}.json`
      );
      const json = await response.json();
      setCurrencies(json[defaultCurrency]);
      return json;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(async () => {
    setIsLoading(true);
    const data = await getPeople();
    setPeople(
      data.map((el) => {
        return {
          name: el.personName,
          netWorth: el.finalWorth,
          img: el.squareImage,
          source: el.source,
          industries: el.industries,
        };
      })
    );
    await getCurrencies();
    setIsLoading(false);
  }, []);

  const handleNameChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleIncomeChange = (e) => {
    setIncome(parseInt(e.target.value));
  };

  const handlePersonClick = (e) => {
    setTargetPerson(
      people.filter(
        (p) =>
          p.name === e.currentTarget.querySelector(".person-name").innerText
      )[0]
    );
  };

  const handleCurrencyChange = (e) => {
    setCurrencyCode(e.target.value);
    setCurrencyRate(currencies[e.target.value]);
  };

  return (
    <StyledContainer className="container-fluid text-center">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1>
            HOW LONG YOU NEED TO WORK TO EARN AS MUCH AS WEALTHIEST PEOPLE
          </h1>
          <SearchBar name={searchName} handleChange={handleNameChange} />
          <PeopleRowContainer
            people={people}
            handleClick={handlePersonClick}
            searchName={searchName}
            targetPerson={targetPerson}
            isLoading={isLoading}
          />
          <IncomeInput
            income={income}
            handleChange={handleIncomeChange}
            currencyCode={currencyCode}
            currencies={currencies}
            handleCurrencyChange={handleCurrencyChange}
          />
          <IncomeBreakDownContainer
            income={income}
            currencyRate={currencyRate}
          />
          <hr />
          {!isEmptyObj(targetPerson) && boolFromNum(income) && (
            <Message
              periods={calculatePeriods(income, targetPerson.netWorth)}
              name={targetPerson.name}
            />
          )}
        </div>
      </div>
      <Footer />
    </StyledContainer>
  );
}

export default App;
