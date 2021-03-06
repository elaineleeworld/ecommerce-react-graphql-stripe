import React, { Component } from "react";
import { Container, Box, Heading, Card, Image, Text } from "gestalt";
import { Link } from "react-router-dom";
import "./App.css";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class App extends Component {
  state = {
    brands: []
  };

  async componentDidMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
          brands {
            _id
            name
            description
            image {
              url
            }
          }
        }`
        }
      });
      // console.log(response);
      this.setState({ brands: response.data.brands });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { brands } = this.state;

    return (
      <Container>
        <Box display="flex" justifyContent="center" marginBottom={2}>
          <Heading color="midnight" size="md">
            Brew Brands
          </Heading>
        </Box>
        {brands.map(brand => (
          <Box margin={2} width={200} key={brand.id} display="flex" justifyContent="around">
            <Card
              image={
                <Box height={200} width={200}>
                  <Image alt="Brand" naturalHeight={1} naturalWidth={1} src={`${apiUrl}${brand.image.url}`} />
                </Box>
              }
            >
              <Box display="flex" justifyContent="center" alignItems="center" direction="column">
                <Text bold size="xl">
                  {brand.name}
                </Text>
                <Text>{brand.description}</Text>
                <Text size="xl">
                  <Link to={`/${brands._id}`}>See Brews</Link>
                </Text>
              </Box>
            </Card>
          </Box>
        ))}
      </Container>
    );
  }
}

export default App;
