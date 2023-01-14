// import { IoBarChartSharp } from "react-icons/io5";
// import AssessmentIcon from '@mui/icons-material/Assessment';
// import { useParams } from "react-router-dom";
// import RelatorioDia from "./Dia";
import React from "react";
import { Card, Grid } from "@mui/material";
import "./style.css";

export default function Relatorios() {
  // const { id } = useParams();

  function CardClicavel() {
    // console.log("eu vou para o google");
    window.location = "http://localhost:3000/RelatorioDia"; // acessar menu de relatório, dia, semana mês

  }

  function CardClicavel1() {
    // console.log("eu vou para o google");
    window.location = "http://localhost:3000/RelatorioSemana"; // acessar menu de relatório, dia, semana mês
  }

  function CardClicavel2() {
    // console.log("eu vou para o google");
    window.location = "http://localhost:3000/relatorioMes"; // acessar menu de relatório, dia, semana mês
  }

  function CardClicavel3() {
    // console.log("eu vou para o google");
    window.location = "http://localhost:3000/relatorioSemestre"; // acessar menu de relatório, dia, semana mês
  }
  return (
    <>
      <br />
      <h1>Relatódio Estacionamento {/*{id}*/}</h1>
      <br />

      <Grid container spacing={2} style={{ display: "flex" }}>
        <Grid item xs={12} sm={6} lg={6}>
          <div class="clicavel" onClick={CardClicavel}>
            <Card height={"100px"}>
              <br />
              <h1>Relatório do dia</h1> <br />
              <Grid style={{ whidth: "150px", height: "150px" }}>
                <img
                  src="./image/statistics.png"
                  alt="ICON "
                  whidth={"110px"}
                  height={"110px"}
                />
              </Grid>
            </Card>
          </div>
        </Grid>

        <br />

        <Grid item xs={12} sm={6} lg={6}>
          <div class="clicavel" onClick={CardClicavel1}>
            <Card>
              <br />
              <h1>Relatório da semana</h1> <br />
              <Grid style={{ whidth: "150px", height: "150px" }}>
                <img
                  src="./image/statistics.png"
                  alt="ICON "
                  whidth={"110px"}
                  height={"110px"}
                />
              </Grid>
            </Card>
          </div>
        </Grid>

        <br />

        <Grid item xs={12} sm={6} lg={6}>
          <div class="clicavel" onClick={CardClicavel2}>
            <Card>
              <br />
              <h1>Relatório do mês</h1> <br />
              <Grid style={{ whidth: "150px", height: "150px" }}>
                <img
                  src="./image/statistics.png"
                  alt="ICON "
                  whidth={"110px"}
                  height={"110px"}
                />
              </Grid>
            </Card>
          </div>
        </Grid>

        <br />

        <Grid item xs={12} sm={6} lg={6}>
          <div class="clicavel" onClick={CardClicavel3}>
            <Card>
              <br />
              <h1>Relatório do Semestre</h1> <br />
              <Grid style={{ whidth: "150px", height: "150px" }}>
                <img
                  src="./image/statistics.png"
                  alt="ICON "
                  whidth={"110px"}
                  height={"110px"}
                />
              </Grid>
            </Card>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
