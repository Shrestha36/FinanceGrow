import { useNavigate } from "react-router-dom";
import {
  ScanCard,
  Title,
  Description,
  UploadButton,
  PlusIcon,
  FileInput,
  Footer,
  FooterItem,
} from "../styles/ScanBillCard.styles";

function ScanBillCard({ onUpload, disabled }) {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file || disabled) return;
    onUpload(file); // ✅ ONLY pass file
  };

  return (
    <ScanCard>
      <Title>Scan Your Bill</Title>

      <Description>
        Upload a receipt or invoice to automatically extract details
      </Description>

      <UploadButton style={{ opacity: disabled ? 0.6 : 1 }}>
        <PlusIcon>+</PlusIcon>
        {disabled ? "Processing..." : "Upload Bill"}
        <FileInput
          type="file"
          accept="image/*,.pdf"
          capture="environment"
          onChange={handleUpload}
          disabled={disabled}
        />
      </UploadButton>

      <Footer>
        <FooterItem>📄 Receipts</FooterItem>
        <FooterItem>📦 Invoices</FooterItem>
      </Footer>
    </ScanCard>
  );
}

export default ScanBillCard;

