import { useTheme } from "@emotion/react";
import {
  ErrorText,
  FormContainer,
  ResponseContainer,
  TextContainer,
} from "@styles/Encontrar-diarista";
import useEncontrarDiarista from "data/hooks/pages/useEncontrarDiarista.page.mobile";
import useIndex from "data/hooks/pages/useIndex.page";
import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import Button from "ui/components/inputs/Button/Button";
import TextInput from "ui/components/inputs/TextInput/TextInput";

export default function EncontrarDiarista() {
  const { colors } = useTheme();
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  } = useIndex();
  const { cepAutomatico } = useEncontrarDiarista();

  useEffect(() => {
    if (cepAutomatico && !cep) {
      setCep(cepAutomatico);
      buscarProfissionais(cepAutomatico);
    }
  }, [cepAutomatico]);

  return (
    <ScrollView>
      <PageTitle
        title="Conheça os profissionais"
        subtitle="Preencha seu endereço e veja todos os profissionais da sua localidade"
      />

      <FormContainer>
        <TextInputMask
          value={cep}
          onChangeText={setCep}
          type="custom"
          options={{ mask: "99.9999-999" }}
          customTextInput={TextInput}
          customTextInputProps={{ label: "Digite o seu CEP" }}
        />
        {erro ? <ErrorText>{erro}</ErrorText> : null}

        <Button
          mode="contained"
          style={{ marginTop: 32 }}
          color={colors.accent}
          disabled={!cepValido || carregando}
          onPress={() => buscarProfissionais(cep)}
          loading={carregando}
        >
          Buscar
        </Button>
      </FormContainer>

      {buscaFeita &&
        (diaristas.length > 0 ? (
          <ResponseContainer>
            {diaristas.map(
              ({ nome_completo, foto_usuario, cidade, reputacao }, index) => (
                <UserInformation
                  key={index}
                  picture={foto_usuario || ""}
                  name={nome_completo}
                  rating={reputacao || 0}
                  description={cidade}
                  darker={index % 2 === 1}
                />
              )
            )}

            {diaristasRestantes > 0 && (
              <TextContainer>
                ... mais {diaristasRestantes}{" "}
                {diaristasRestantes > 1
                  ? "profissionais atendem"
                  : "profissial atende"}
                atendem ao seu endereço.
              </TextContainer>
            )}

            <Button color={colors.accent} mode={"contained"}>
              Contratar um profissional
            </Button>
          </ResponseContainer>
        ) : (
          <TextContainer>
            Ainda não temos nenhuma diarista na sua região.
          </TextContainer>
        ))}
    </ScrollView>
  );
}
