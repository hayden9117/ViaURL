import { Button } from "@mui/material";
import { Router } from "next/router";
import { useRouter } from "next/router";
import { PreviewSVG } from "../tool-icons/NavSVGS";
export const Preview = (props) => {
  const { token } = props;
  const router = useRouter();
  const handlePreview = () => {
    router.push("/RenderPage");
  };
  return (
    <>
      <Button
        id="demo-customized-Button"
        aria-haspopup="true"
        onClick={handlePreview}
        disableElevation
      >
        <PreviewSVG />
      </Button>
    </>
  );
};
