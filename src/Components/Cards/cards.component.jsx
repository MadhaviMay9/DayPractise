import React from "react";
import "./cards.styles.css";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

export const CardsComponent = props => {
  return (
    <div className="card-list">
      {props.users.map(names => (
        <Card>
          <CardContent>
            <div key={names.id}>{names.name}</div>
          </CardContent>
          {/* <CardActions>
           <Button size="small">Learn More</Button>
         </CardActions> */}
        </Card>
      ))}
    </div>
  );
};
