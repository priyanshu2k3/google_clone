import React from "react";
import useGoogleSearch from "../fetch";
import { useStateValue } from "../../Stateprovider";
import temp from "../temp";

function ResultBottom() {
  var dis = <></>;

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
            {
              console.log(item.link, "mapping");
            }
            <div className="response">
              <a href={item.Link} className="response__link">
                <img
                  className="response__image"
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                {item.displayLink}
              </a>

              <a href="" className="response__link__title">
                <h2>Github</h2>
              </a>
              <p className="response__description">
                GitHub is where over 94 million developers shape the future of
                software, together. Contribute to the open source community,
                manage your Git repositories, ...
              </p>
            </div>;
          })}
        </div>
      )}
    </>
  );
}
export default ResultBottom;
