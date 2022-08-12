import { useState } from "react";
import { addTask } from "../redux/tasksSlice";

export default function App() {
    const list = [
        "Banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon"
    ];
    const [dataList, setDataList] = useState(list);

    const handleChange = (event
    ) => {
        if (event.target.value === "") {
            return setDataList(list);

        }
        const filteredValues = list.filter(
            (item) =>
                item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        );
        setDataList(filteredValues);
    }

    return (
        <div className="App">
            Search: <input type="text" onChange={handleChange} />
            {dataList &&
                dataList.map((item) => {
                    return <li>{item}</li>;
                })}
        </div>
    );
}
