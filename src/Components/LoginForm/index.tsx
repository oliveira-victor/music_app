import { useState } from "react"
import { Input, Label, LinkStyle } from "../../styles"

import * as S from './styles'

import eye from '../../assets/images/eye.svg'
import eyeOff from '../../assets/images/eyeOff.svg'

type Props = {
    linkAction: React.MouseEventHandler<HTMLButtonElement>
};

const LoginForm = ({ linkAction }: Props) => {

    const [type, setType] = useState('password')

    const toggleType = () => {
        type === 'password' ? setType('text') : setType('password')
    }

    return (
        <S.LoginForm>
            <h2>Log in</h2>
            <Label htmlFor="user">User name</Label>
            <Input type="text" name="user" required />
            <Label htmlFor="user">Password</Label>
            <Input type={type} name="user" required />
            <img onClick={toggleType} src={type === 'text' ? eye : eyeOff} alt="Show or hide password icon" title='Show or hide password' />
            <S.LoginBtn>Log in</S.LoginBtn>
            <p>New user? <LinkStyle onClick={linkAction}>Create a new account</LinkStyle></p>
        </S.LoginForm>
    )
}

export default LoginForm