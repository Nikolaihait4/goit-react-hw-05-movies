const ScoreBar = ({ score }) => {
  const percent = (score * 360) / 100;

  return (
    <div style={{ paddingTop: '20px' }}>
      <span
        style={{
          background: `conic-gradient(rgb(0, 122, 255) ${percent}deg, #c8c5c59e 0deg)`,
        }}
      >
        <span>{`${score}%`}</span>
      </span>
    </div>
  );
};

export default ScoreBar;
