import { useState } from 'react';

import { Container, Form, Line, LineButton, Label, Input, Datalist, Button, List, ItemList } from './styles';

import api from '../../services/api';

function Main() {
   const initialFields = {
      origin: '',
      destination: '',
      plan: '',
      minutes: '',
   };

   const [values, setValues] = useState(initialFields);
   const [results, setResults] = useState(null);
   const [errors, setErrors] = useState(false);

   const handleInputChange = (event) => {
      let { name, value } = event.target;

      setValues({
         ...values,
         [name]: value
      });
   }

   const handleFormSubmit = async (event) => {
      event.preventDefault();

      if (values.origin === '' || values.destination === '' || values.plan === '' || values.minutes === '') {
         setErrors('Erro!');
      }

      const json = {
         origin: values.origin,
         destination: values.destination,
         plan: values.plan === 'Sem plano' ? '' : values.plan,
         minutes: values.minutes,
      };

      const response = await api.post('faleMais', json);
      console.log(response.data);
      setResults(response.data);
      setValues(initialFields);
      setErrors(false);
   }

   return (
      <Container>

         <Form onSubmit={handleFormSubmit}>

            <Line>
               <Label>Origem:</Label>
               <Input
                  name='origin'
                  value={values.origin}
                  onChange={handleInputChange}
                  placeholder="Insira o DDD de origem"
               />
            </Line>

            <Line>
               <Label>Destino:</Label>
               <Input
                  name='destination'
                  value={values.destination}
                  onChange={handleInputChange}
                  placeholder="Insira o DDD de destino"
               />
            </Line>

            <Line>
               <Label>Minutos:</Label>
               <Input
                  name='minutes'
                  value={values.minutes}
                  onChange={handleInputChange}
                  placeholder="Insira os minutos falados"
               />
            </Line>

            <Line>
               <Label>Plano:</Label>
               <Input
                  list="uf"
                  placeholder="Plano"
                  name="plan"
                  value={values.plan}
                  onChange={handleInputChange}
               />
               <Datalist id="uf">
                  <option value="Sem plano" />
                  <option value="FaleMais 30" />
                  <option value="FaleMais 60" />
                  <option value="FaleMais 120" />
               </Datalist>
            </Line>

            <LineButton>
               <Button>
                  Verificar
               </Button>
            </LineButton>
         </Form>

         {results && (
            <List>
               {results && (
                  <ItemList>
                     <p>Origem: {results.origin}</p>
                     <p>Destino: {results.destination}</p>
                     <p>Minutos: {results.minutes}</p>
                     <p>Plano: {results.plan}</p>
                     <p>Com FaleMais:{results.withFaleMais}</p>
                     <p>Sem FaleMais:{results.withoutFaleMais}</p>
                  </ItemList>
               )}
            </List>
         )}


      </Container>
   );
}

export default Main;