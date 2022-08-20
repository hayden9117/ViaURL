import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
import { IconButton } from "@mui/material";

export default function Undo(props) {
  const { setConfig } = props;
  const handleUndo = () => {
    let versionArr = [];

    versionArr = JSON.parse(sessionStorage.getItem("versionControl")) || [];

    versionArr.pop();
    setConfig(versionArr[versionArr.length - 1]);
    sessionStorage.setItem("versionControl", JSON.stringify(versionArr));
  };
  return (
    <>
      <IconButton onClick={() => handleUndo()}>
        <UndoRoundedIcon />
      </IconButton>
    </>
  );
}
