import { useState } from "react";
import { Input, Label, LinkStyle } from "../../styles"
import { colors } from "../../styles/colors";

import * as S from './styles'

import eye from '../../assets/images/eye.svg'
import eyeOff from '../../assets/images/eyeOff.svg'

type Props = {
    linkAction: React.MouseEventHandler<HTMLButtonElement>
};

const NewAccount = ({ linkAction }: Props) => {

    const [type, setType] = useState('password')

    const [password, setPassword] = useState('')

    const [confirmPassword, setConfirmPassword] = useState('')

    function toggleType() {
        type === 'password' ? setType('text') : setType('password')
    }

    function matchingPassword() {
        if (password !== confirmPassword) {
            return <p style={{ color: `${colors.alert}` }}>Your password must match</p>
        } else if (password === confirmPassword && password !== '') {
            return <p style={{ color: `${colors.success}` }}>Your password is matching!</p>
        }
    }

    function passwordLenght() {
        if (password.length > 0) {
            if (password === confirmPassword && password.length < 8) {
                return <p style={{ color: `${colors.alert}` }}>Your password must be at least 8 digits long</p>
            }
        }
    }

    return (
        <S.NewAccountContainer className="container">
            <h2>Welcome to Music App!</h2>
            <p>Already have an account? <LinkStyle onClick={linkAction}>Log in</LinkStyle></p>
            <form>
                <Label htmlFor="name">Full name</Label>
                <Input type="text" name='name' id='name' required />
                <Label htmlFor="username">Username</Label>
                <Input type="text" name="username" id='username' required />
                <Label htmlFor="password">Password</Label>
                <Input name="password" id='password' type={type} onChange={event => setPassword(event.target.value)} required />
                <img onClick={toggleType} src={type === 'text' ? eye : eyeOff} alt="Show or hide password icon" title='Show or hide password' />
                <Label htmlFor="confirm">Confirm password</Label>
                <Input name="confirm" id="confirm" type={type} onChange={event => setConfirmPassword(event.target.value)} required />
                {matchingPassword()}
                {passwordLenght()}
                <S.RadioContainer>
                    <div>
                        <input type="radio" id="user" name="accounttype" value='User' required />
                        <label htmlFor="user">Register as a user</label>
                        
                    </div>
                    <div>
                        <input type="radio" id="admin" name="accounttype" value='admin' />
                        <label htmlFor="admin">Register as an admin</label>
                    </div>
                </S.RadioContainer>
                <S.SubmitBtn>Create new account</S.SubmitBtn>
            </form>
        </S.NewAccountContainer>
    )
}

export default NewAccount