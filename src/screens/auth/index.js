import { View, Text, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native'
import React, {useState, useReducer} from 'react'
import { Input } from '../../components'
import { styles } from './styles'
import { useDispatch } from 'react-redux'
import { signUp, signIn } from '../../store/actions'
import { UPDATE_FORM, onInputChange } from '../../utils/form'



const initialState = {
    email: { value: '', error: '', touched: false, hasError: true },
    password: { value: '', error: '', touched: false, hasError: true },
    isFormValid: false
}

const formReducer = (state, action) => {
    switch (action.type) {
      case UPDATE_FORM:
        const { name, value, hasError, error, touched, isFormValid } = action.data;
        return {
          ...state,
          [name]: {
            ...state[name],
            value,
            hasError,
            error,
            touched,
          },
          isFormValid,
        };
      default:
        return state;
    }
  };


const Auth = ({navigation}) => {

    const [formState, dispatchFormState] = useReducer(formReducer, initialState);

    const [isLogged, setIsLogged] = useState(true)
    const dispatch = useDispatch();

    const message = isLogged ? '¿No tienes una cuenta?' : 'Ya tengo una cuenta'
    const messageAction = isLogged ? 'Ingresar' : 'Registrarse'

    const onHandleChangeInput = (value, type) => {
        onInputChange(type, value, dispatchFormState, formState);
      };

    const handleSubmit = () =>{
        dispatch(isLogged ? signIn(formState.email.value, formState.password.value)
                          : signUp(formState.email.value, formState.password.value))
    }

  return (
    <KeyboardAvoidingView style={styles.keyboardContainer} behavior='padding' enabled>
      <View style={styles.authTitleContainer}>
          <Image style={styles.productImg} source={require('../../../assets/icon.png')}/>
          <Text style={styles.title}>Pronto</Text>
          <Text style={styles.subTitle}>Food Delivery App</Text>
       </View>
        <View style={styles.authContainer}>
              <Input
                  style={styles.authInput}
                  label='Email'
                  placeholder='Ingrese su E-Mail'
                  keyboardType='email-addres'
                  autoCapitalize='none'
                  autoCorrect={false}
                  value={formState.email.value}
                  hasError={formState.email.hasError}
                  error={formState.email.error}
                  touched={formState.email.touched}
                  onChangeText={(text) => onHandleChangeInput(text, 'email')}
                  />
              <Input
                  style={styles.authInput}
                  label='Contraseña'
                  placeholder='Ingrese su Contraseña'
                  secureTextEntry={true}
                  autoCapitalize='none'
                  autoCorrect={false}
                  value={formState.password.value}
                  hasError={formState.password.hasError}
                  error={formState.password.error}
                  touched={formState.password.touched}
                  onChangeText={(text) => onHandleChangeInput(text, 'password')}
                  />
            <TouchableOpacity onPress={handleSubmit}  disabled={!formState.isFormValid} style={styles.submitButton} >
              <Text style={styles.submitText}>{messageAction}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> setIsLogged(!isLogged)}>
                <Text style={styles.authLink}>{message}</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default Auth