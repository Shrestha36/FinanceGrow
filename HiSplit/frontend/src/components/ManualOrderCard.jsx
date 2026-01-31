import { useState } from "react";
import {
  FiEdit3,
  FiUser,
  FiCoffee,
  FiTag,
  FiDollarSign,
  FiPlus,
  FiDroplet,
  FiCheckCircle,
} from "react-icons/fi";
import dineBanner from "../../assets/images/dineBanner.png";
import {
  Card,
  Title,
  Input,
  Row,
  Section,
  ItemRow,
  Total,
  CardBanner,
  Header,
  SectionTitle,
  InputWrapper,
  IconButton,
  SubmitButton,
} from "../styles/ManualOrder.style.js";

function ManualOrderCard({ onSubmit }) {
  const [customer, setCustomer] = useState("");

  const [foodName, setFoodName] = useState("");
  const [foodPrice, setFoodPrice] = useState("");

  const [drinkName, setDrinkName] = useState("");
  const [drinkPrice, setDrinkPrice] = useState("");

  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const addFood = () => {
    if (!foodName || !foodPrice) return;

    setFoods([
      ...foods,
      { name: foodName, price: Number(foodPrice), type: "food" },
    ]);
    setFoodName("");
    setFoodPrice("");
  };

  const addDrink = () => {
    if (!drinkName || !drinkPrice) return;

    setDrinks([
      ...drinks,
      { name: drinkName, price: Number(drinkPrice), type: "drink" },
    ]);
    setDrinkName("");
    setDrinkPrice("");
  };

  const foodTotal = foods.reduce((s, i) => s + (Number(i.price) || 0), 0);

  const drinkTotal = drinks.reduce((s, i) => s + (Number(i.price) || 0), 0);

  const total = foodTotal + drinkTotal;

  const handleSubmit = () => {
    if (!customer || total === 0) return;

    const allItems = [...foods, ...drinks];

    onSubmit({
      customer,
      items: allItems,
      total,
    });

    // ✅ clear card after submit
    setCustomer("");
    setFoods([]);
    setDrinks([]);
    setFoodName("");
    setFoodPrice("");
    setDrinkName("");
    setDrinkPrice("");
  };

  return (
    <Card>
      <CardBanner bg={dineBanner} />
      <Header>
        <FiEdit3 />
        <Title>Manual Order Entry</Title>
      </Header>

      <InputWrapper>
        <FiUser />
        <Input
          placeholder="Customer Name"
          value={customer}
          onChange={(e) =>
            setCustomer(e.target.value.replace(/[^a-zA-Z\s]/g, ""))
          }
        />
      </InputWrapper>

      {/* FOOD */}
      <Section>
        <SectionTitle>
          <FiCoffee />
          <span>Food Items</span>
        </SectionTitle>

        <Row>
          <InputWrapper>
            <FiTag />
            <Input
              placeholder="Item name"
              value={foodName}
              onChange={(e) =>
                setFoodName(e.target.value.replace(/[^a-zA-Z\s]/g, ""))
              }
            />
          </InputWrapper>

          <InputWrapper>
            <FiDollarSign />
            <Input
              placeholder="₹ Price"
              type="number"
              value={foodPrice}
              onChange={(e) =>
                setFoodPrice(e.target.value.replace(/[^0-9]/g, ""))
              }
            />
          </InputWrapper>

          <IconButton onClick={addFood}>
            <FiPlus />
          </IconButton>
        </Row>

        {foods.map((f, i) => (
          <ItemRow key={i}>
            <span>{f.name}</span>
            <span>₹{f.price}</span>
          </ItemRow>
        ))}
      </Section>

      {/* DRINKS */}
      <Section>
        <SectionTitle>
          <FiDroplet />
          <span>Drinks</span>
        </SectionTitle>

        <Row>
          <InputWrapper>
            <FiTag />
            <Input
              placeholder="Drink name"
              value={drinkName}
              onChange={(e) =>
                setDrinkName(e.target.value.replace(/[^a-zA-Z\s]/g, ""))
              }
            />
          </InputWrapper>

          <InputWrapper>
            <FiDollarSign />
            <Input
              placeholder="₹ Price"
              type="number"
              value={drinkPrice}
              onChange={(e) =>
                setDrinkPrice(e.target.value.replace(/[^0-9]/g, ""))
              }
            />
          </InputWrapper>

          <IconButton onClick={addDrink}>
            <FiPlus />
          </IconButton>
        </Row>

        {drinks.map((d, i) => (
          <ItemRow key={i}>
            <span>{d.name}</span>
            <span>₹{d.price}</span>
          </ItemRow>
        ))}
      </Section>

      <Total>Grand Total: ₹{total}</Total>

      <SubmitButton onClick={handleSubmit}>
        <FiCheckCircle />
        <span>Submit Order</span>
      </SubmitButton>
    </Card>
  );
}

export default ManualOrderCard;
