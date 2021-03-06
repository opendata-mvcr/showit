import React from "react";
import { Box, Paper, styled, Typography } from "@mui/material";
import { RelationTermResult } from "../../api/TermAPI";
import RouteLink from "../RouteLink";
import { generateTermRoute } from "../../utils/Utils";

const StyledTerm = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "current",
})<{ current?: boolean }>(({ theme, current }) => ({
  backgroundColor: current
    ? theme.palette.secondary.main
    : theme.palette.primary.main,
  marginBottom: -1,
  minHeight: 56,
  minWidth: 165,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  alignItems: "center",
  paddingTop: 12,
  paddingBottom: 12,
}));

const BoxWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "current",
})<{ current?: boolean }>(({ theme, current }) => ({
  backgroundColor: current
    ? theme.palette.secondary.main
    : theme.palette.primary.main,
  border: "1px solid rgba(0, 0, 0, .125)",
  boxShadow: "none",
}));

interface RelationTermProps {
  data: RelationTermResult;
  showVocabulary?: boolean;
}

export const RelationItem: React.FC<RelationTermProps> = ({
  data,
  showVocabulary,
}) => {
  const routeProps = generateTermRoute(data);
  return (
    <Box flex={1} display={"flex"}>
      <Box flex={2}>
        <BoxWrapper current={false}>
          <StyledTerm current={false} square elevation={0}>
            {showVocabulary && (
              <Typography variant="body2" color="textSecondary">
                {data.vocabulary.label}
              </Typography>
            )}
            <RouteLink to={routeProps} variant="h6" color="textSecondary">
              {data.label}
            </RouteLink>
          </StyledTerm>
        </BoxWrapper>
      </Box>
    </Box>
  );
};

interface CurrentRelationTermProps {
  data: RelationTermResult;
}
export const CurrentRelationTerm: React.FC<CurrentRelationTermProps> = ({
  data,
}) => {
  return (
    <BoxWrapper current={true} flex={1}>
      <StyledTerm current={true} square elevation={0}>
        <Typography variant="h6" color="textSecondary">
          {data.label}
        </Typography>
      </StyledTerm>
    </BoxWrapper>
  );
};
