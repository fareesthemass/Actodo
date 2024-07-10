import Header from "../components/Header";
import Card from "../components/Card";
import Todocontainer from "../components/Todocontainer";

function Landing() {
    //current date
    const getCurrentDateWithTextMonth = () => {
        const date = new Date();
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();

        return `${day} ${month} ${year}`;
    }
    //current time
    function getCurrentTime() {
        const date = new Date();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        return `${hours}:${minutes}:${seconds}`;
    }
    return (
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <Header />
                <div className="flex justify-between my-5 gap-7 text-center flex-wrap">
                    <Card bgcolor={"#8272DA"} title={"23"} subtitle={'Chennai'} />
                    <Card bgcolor={"#FD6663"} title={getCurrentDateWithTextMonth()} subtitle={getCurrentTime()} />
                    <Card bgcolor={"#FCA201"} title={"Built using"} subtitle={'React'} />
                </div>
                <Todocontainer />
            </div>
        </div>
    );
}

export default Landing