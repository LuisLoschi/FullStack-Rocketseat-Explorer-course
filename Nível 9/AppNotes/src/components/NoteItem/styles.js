import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme, isnew}) => isnew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    border: ${({theme, isnew}) => isnew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

    display: flex;
    align-items: center;

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }

    > button {
        border: none;
        background: none;
    }

    .button-add {
        color: ${({theme}) => theme.COLORS.MAIN_COLOR};
    }

    .button-delete {
        color: ${({theme}) => theme.COLORS.RED};
    }
`;
