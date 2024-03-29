import React, { useState, useEffect } from "react";
import AutoGeneratedImage from "../../components/profile/AutoGeneratedImage";
import { getContributors } from "../../services/remote/user/user";

function ContributorsPage() {
  const [contributors, setContributors] = useState([]);

  const handleGetContributors = async () => {
    const res = await getContributors();

    if (res.users !== undefined) {
      setContributors(res.users);
    }
  };

  useEffect(() => {
    handleGetContributors();
  }, []);

  return (
    <>
      <h1 className="desc-text">
        Um grande obrigado para todos os nossos contribudores que ajudam a
        ajudar o próximo! &#4560;
      </h1>
      <div className="contributors-container">
        {contributors.map((contributor) => (
          <div>
            <div className="contributor-photo-container">
              <AutoGeneratedImage
                username={
                  contributor.username !== "" ? contributor.username : "??"
                }
              />
            </div>
            <p className="contributor-username">{contributor.username}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ContributorsPage;
