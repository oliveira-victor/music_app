import { Input, Label, LinkStyle } from "../../styles"

import * as S from './styles'

import eye from '../../assets/images/eye.svg'
import eyeOff from '../../assets/images/eyeOff.svg'
import { useState } from "react";

type Props = {
    linkAction: React.MouseEventHandler<HTMLButtonElement>
};

const NewAccount = ({ linkAction }: Props) => {

    const [type, setType] = useState('password')

    const toggleType = () => {
        type === 'password' ? setType('text') : setType('password')
    }

    return (
        <S.NewAccountContainer className="container">
            <h2>Welcome to Music App!</h2>
            <p>Already have an account? <LinkStyle onClick={linkAction}>Log in</LinkStyle></p>
            <form>
                <Label>Full name</Label>
                <Input type="text" required />
                <Label>Username</Label>
                <Input type="text" required />
                <Label>Password</Label>
                <Input type={type} required />
                <img onClick={toggleType} src={type === 'text' ? eye : eyeOff} alt="Show or hide password icon" title='Show or hide password' />
                <Label>Confirm password</Label>
                <Input type={type} required />
                <S.RadioContainer>
                    <div>
                        <input type="radio" id="user" name="accounttype" value='User' required />
                        <label htmlFor="user">I am a user</label>
                        
                    </div>
                    <div>
                        <input type="radio" id="admin" name="accounttype" value='admin' />
                        <label htmlFor="admin">I am an admin</label>
                    </div>
                </S.RadioContainer>
                <S.SubmitBtn>Create new account</S.SubmitBtn>
            </form>
        </S.NewAccountContainer>
    )
}

export default NewAccount