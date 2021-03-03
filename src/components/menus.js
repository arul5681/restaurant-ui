import React from 'react'


    const handleSubmit = () => {
        fetch('http://localhost:8080/desiRestaurant/receiveOrder', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
        {
            "order_id": "",
            "userId": "anbu0520",
            "menuId": [
            "20",
            "25",
            "13"
        ]
            })
        }).then((response) => response.json())
            .then((json) => alert(json.confirmation))
            .catch((error) => console.error(error));
    };

    const
    Menus = ({menus}) => {
        return (
            <div>
                <h1>Menu</h1>
                <table broder="1">
                    <tbody>

                    {menus.map((menu) => (

                        <tr>
                            <td>{menu.category}</td>
                            <td>{menu.itemNo}</td>
                            <td>{menu.itemName}</td>
                            <td>{menu.price}</td>
                            <td><input id="menuIds" type={"checkbox"}/></td>
                        </tr>
                    ))}
                    <tr><td> <input type="submit" value="Submit" onClick={() => {
                        handleSubmit();}}/>
                    </td></tr>
                    </tbody>
                </table>

            </div>
        )
    };

export default Menus;


