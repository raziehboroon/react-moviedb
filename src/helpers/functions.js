export const getDate = () => {
  const date = new Date();
  return date.getFullYear();
};

export const summarizeVoteCount = (vote_count) => {
  if (vote_count > 1000000) {
    return `${vote_count.toString().slice(0, -6)}M`;
  }
  if (vote_count > 1000) {
    return `${vote_count.toString().slice(0, -3)}K`;
  }
  return vote_count;
};

export const voteAverageColor = (vote_average) => {
  if (vote_average === 0) {
    return;
  } else if (vote_average >= 7) {
    return "green";
  } else if (vote_average >= 5) {
    return "orange";
  } else {
    return "red";
  }
};
