import devices from "../../utilities/theme/devices";
import styled from "styled-components";

export const Container = styled.div`
  margin: 4rem 0;

  @media ${devices.mobile} {
    width: 100%;
    overflow: scroll;
  }

  @media ${devices.tablet} {
    width: 100%;
    overflow: scroll;
  }

  table {
    width: 100%;

    @media ${devices.mobile} {
      td {
        min-width: 200px;

        &:first-of-type {
          min-width: 70px;
        }
      }
    }

    @media ${devices.tablet} {
      td {
        min-width: 200px;

        &:first-of-type {
          min-width: 70px;
        }
      }
    }

    thead {
      tr td {
        padding: 0;
      }
      tr:first-of-type {
        td:first-of-type {
          border-top-left-radius: 1rem;
        }
        td:last-of-type {
          border-top-right-radius: 1rem;
        }
      }
      td {
        font-weight: bold;
      }
    }

    tbody {
      tr:last-of-type {
        td:first-of-type {
          border-bottom-left-radius: 10px;
        }
        td:last-of-type {
          border-bottom-right-radius: 10px;
        }
      }
    }

    td {
      padding: 1.5rem 0;
      text-align: center;
      transition: all ease 400ms;
      border: 1px solid;
      border-color: ${({ theme }) => theme.table.borderColor};
    }

    tbody tr:nth-child(odd) td {
      background-color: ${({ theme }) => theme.table.rowBackgroundColor};
    }

    tbody tr:nth-child(even) td {
      background-color: ${({ theme }) => theme.table.rowBackgroundColor};

    }

    tbody tr:hover td {
      background-color:  ${({ theme }) => theme.table.hoverRowBackgroundColor} !important;
    }
  }
`;

export const HeaderItem = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      cursor: pointer;
    }
  }
`;

export const EmptyState = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;
