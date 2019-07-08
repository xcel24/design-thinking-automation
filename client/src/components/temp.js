Persona Map
<div>
    <ul>
        <li>Age:{params.age}</li>
        <li>Profession:{params.name}</li>
        <li>Status:</li>
        <li>Tech Savvy:</li>
     </ul>
     <TextField
         label="Work  Profile"
         placeholder="Work Profile"
         multiline={true}
         rows={2}
         rowsMax={5}    
         />  
     <br />
     <TextField
         label="Goals"
         placeholder="Goals"
         multiline={true}
         rows={2}
         rowsMax={5}    
         />  
     <br />
     <h2>Personality</h2>
     <RadioGroup aria-label="position" name="position" row>
         <FormControlLabel
             value="1"
             control={<Radio color="primary" />}
             label="Extrovert"
             labelPlacement="top"
             />
         <FormControlLabel
             value="2"
             control={<Radio color="primary" />}
             label="Ambivert-2"
             labelPlacement="top"
             />
         <FormControlLabel
             value="3"
             control={<Radio color="primary" />}
             label="Ambivert-3"
             labelPlacement="top"
             />
         <FormControlLabel
             value="4"
             control={<Radio color="primary" />}
             label="Ambivert-5"
             labelPlacement="top"
             />
         <FormControlLabel
             value="5"
             control={<Radio color="primary" />}
             label="Introvert"
             labelPlacement="top"
             />
         </RadioGroup>

 </div>