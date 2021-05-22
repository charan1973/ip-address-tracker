const Info = ({ info }) => {
  return (
    <div className="info-card">
      {info && info.as ? (
        <>
          <div>
            <h5>IP ADDRESS</h5>
            <p>{info.ip}</p>
          </div>
          <div>
            <h5>LOCATION</h5>
            <p>
              {info.location.city}, {info.location.country}
            </p>
          </div>
          <div>
            <h5>TIMEZONE</h5>
            <p>UTC{info.location.timezone}</p>
          </div>
          <div>
            <h5>ISP</h5>
            <p>{info.as.name}</p>
          </div>
        </>
      ) : (
        <div style={{padding: "20px"}}>Enter a valid IP address</div>
      )}
    </div>
  );
};

export default Info;
