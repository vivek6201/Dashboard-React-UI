import { useDispatch, useSelector } from "react-redux";
import "./Accordian.css";
import { accArray } from "../../AccArray";
import { changeAccState, changeValue } from "../../Redux/Slices/AccordianSlice";
import { useEffect } from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

export default function Accordian() {
  const accValue = useSelector((state) => state.accordian.value);
  const isActive = useSelector((state) => state.accordian.isActive);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(accValue);
    console.log(isActive);
  }, [accValue, isActive]);

  return (
    <div className="accordian">
      <div className="acc-container">
        <div className="accordianTitle">
          <div onClick={() => dispatch(changeAccState())} className="accValue">
            <p>{accValue}</p>
            {isActive ? (
              <TiArrowSortedUp size={22} />
            ) : (
              <TiArrowSortedDown size={22} />
            )}
          </div>
          <p>Data Scientist Program</p>
        </div>
      </div>
      {isActive ? (
        <div className="accordianContent">
          <div className="content-container">
            <p>Select Program</p>
            <div>
              {accArray.map((input, index) => {
                return (
                  <label key={index} className={input === accValue ? "active" : ""}>
                    <span className="input-title">{input}</span>
                    <input
                      type="radio"
                      name="accordian"
                      value={input}
                      onChange={() => dispatch(changeValue(input))}
                      checked={accValue === input}
                    />
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
