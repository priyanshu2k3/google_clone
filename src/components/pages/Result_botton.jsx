import React from "react";
import useGoogleSearch from "../fetch";
import { useStateValue } from "../../Stateprovider";
import temp from "../temp";

function ResultBottom() {
  const [{ term }] = useStateValue();
  console.log(term, "searching term");
  const { data } = useGoogleSearch(term);

  // const data=temp;
  console.log(data, "resultbottom");

  return (
    <>
      {term !== null && (
        <div className="resultBottom">
          <p className="resultBottom__count">
            About results {data?.searchInformation.totalResults} (
            {data?.searchInformation.formattedSearchTime})for {term}{" "}
          </p>
          {data?.items.map((item) => {
            return(
            <div className="response">
              <a href={item.link} className="response__link">
              {item.pagemap?.cse_image && item.pagemap?.cse_image[0]?.src &&(<img
                  className="response__image"
                  src={item.pagemap?.cse_image[0]?.src}
                  alt=""
                />)}
                {item.displayLink}
              </a>

              <a href={item.link} className="response__link__title">
                <h2>{item.title}</h2>
              </a>
              <p className="response__description">
                {item.snippet}
              </p>
            </div>)
          })}
        </div>
      )}
    </>
  );
}
export default ResultBottom;
