import Team from "../../components/Team";

const getOrdinalSuffix = (dateNumber) => {
    const j = dateNumber % 10;
    const k = dateNumber % 100;
    if (j === 1 && k !== 11) {
        return "st";
    } else if (j === 2 && k !== 12) {
        return "nd";
    } else if (j === 3 && k !== 13) {
        return "rd";
    } else {
        return "th";
    }
};

const TopTeamsPage = ({ topTeams }) => {
    const date = new Date();
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const dayWithSuffix = `${date.getDate()}${getOrdinalSuffix(date.getDate())}`;

    return (
        <div>
            <h1 style={{fontFamily: 'Poppins-Medium'}}>Counter-Strike World ranking on {months[date.getMonth()]} {dayWithSuffix}, {date.getFullYear()}</h1>
            <Team teams={topTeams}></Team>
        </div>
    );
}

export default TopTeamsPage;
