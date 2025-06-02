import { LeadEmailRequest } from "@/@types/email";
import { Body, Container, Head, Heading, Hr, Html, Img, Preview, Section, Text,  } from "@react-email/components";

export const LeadTemplateEmail = ({ 
  name,
  company,
  email,
  message,
  services,
}: LeadEmailRequest) => (
  <Html>
    <Head />
    <Preview>Solicitação de contato</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={coverSection}>
          <Section style={imageSection}>
            <Img
              src="https://i.ibb.co/dMnK5xp/white-logo.png"
              width="200"
              height="100"
              alt="Coderaw"
            />
          </Section>
          <Section style={upperSection}>
            <Heading style={h1}>
              Olá equipe! <br />
              Recebemos uma solicitação de contato. 
            </Heading>
            <Text style={mainText}>
              O cliente se chama {name}, {company && `é da empresa ${company}`} está interessado nos seguintes serviços:
            </Text>
            <Section>
                {services.map((service) => (<><Text key={service}>{service}</Text> <br /> </>))}
            </Section>
            <Section style={lowerSection}>
                <Heading>mensagem deixada pelo cliente:</Heading>
                <Text style={cautionText}>
                {message}
                </Text>
            </Section>
          </Section>
          <Hr />
          <Section style={lowerSection}>
            email para resposta: {email}
          </Section>
        </Section>
        <Text style={footerText}>
          © Coderaw Soluções Tecnológicas LTDA - 2025. Todos os direitos reservados.
        </Text>
      </Container>
    </Body>
  </Html>
);


const main = {
    backgroundColor: "#fff",
    color: "#212121",
  };
  
  const container = {
    padding: "20px",
    margin: "0 auto",
    backgroundColor: "#eee",
  };
  
  const h1 = {
    color: "#333",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
  };
  
  const text = {
    color: "#333",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    margin: "24px 0",
  };
  
  const imageSection = {
    backgroundColor: "#000200",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 40px",
  };
  
  const coverSection = { backgroundColor: "#fff" };
  
  const upperSection = { padding: "25px 35px" };
  
  const lowerSection = { padding: "25px 35px" };
  
  const footerText = {
    ...text,
    fontSize: "12px",
    padding: "0 20px",
  };
  
  const mainText = { ...text, marginBottom: "14px" };
  
  const cautionText = { ...text, margin: "0px" };
  
  const button = {
    backgroundColor: "#000200",
    borderRadius: "0.3rem",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "100%",
    padding: "10px",
    marginTop: "20px",
    marginBottom: "20px"
  };