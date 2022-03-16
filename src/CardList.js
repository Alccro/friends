import React from "react";
import Card from './Card';

const CardList = ({friends}) => {
    return (
        <>
            {
                friends.map((user, i) => {
                    return (
                        <Card 
                            key={friends[i].username} 
                            id={friends[i].id} 
                            name={friends[i].name} 
                            email={friends[i].email}
                        />
                    );
                })
            }
        </>
    )
}

export default CardList;