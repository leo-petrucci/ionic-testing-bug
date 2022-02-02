import {
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonRadio,
  IonRadioGroup,
} from "@ionic/react";
import React, { useState } from "react";

export const Component = () => {
  const [selected, setSelected] = useState("");

  return (
    <>
      <IonList>
        <IonItemDivider>Sort by</IonItemDivider>
        <IonRadioGroup
          value={selected}
          onIonChange={(e) => setSelected(e.detail.value)}
        >
          <IonItem>
            <IonLabel>Boosted and Auto-Assign first</IonLabel>
            <IonRadio title="normal" slot="start" value="" />
          </IonItem>

          <IonItem title="distanceItem">
            <IonLabel title="distanceLabel">Closest to you</IonLabel>
            <IonRadio title="distanceRadio" slot="start" value="Distance" />
          </IonItem>

          <IonItem>
            <IonLabel>Soonest</IonLabel>
            <IonRadio title="start" slot="start" value="FromDate" />
          </IonItem>
        </IonRadioGroup>
      </IonList>
      <div data-testid="result">{selected}</div>
    </>
  );
};

export default Component;
