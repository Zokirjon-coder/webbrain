import styled from "styled-components"

export const CONTAINER = styled.div`
padding: 48px 90px;
border-top: 1px solid #CFCCC9;
p{
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 26px;
color: #31344B;
margin: 15px 0;
}

h1{
    font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 19px;
line-height: 28px;
color: #31344B;
}
.yon{
    width: 30%;
}
.orta{
    width: 20%;
}
.socials{
    p{
        width: 80%;
    }
    div{
        img{
            margin: 15px;
        }
    }
}
.join{
    p{
        width: 70%;
    }
    input{
        all: unset;
        padding: 15px;
        border: 1px solid var(--blue);
        border-radius: 5px;
        width: 75%;
        margin-bottom: 15px;
        height: 20px;
    }

    button{
        width: 75%;
        padding: 15px;
        height: 20px;
    }
}
`