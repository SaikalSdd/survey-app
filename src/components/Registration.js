import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

//import FacebookLogin from 'react-facebook-login'
//import GoogleLogin from 'react-google-login'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBBtn, MDBIcon } from 'mdbreact';
import styled from 'styled-components'

import background from '../assets/images/survapp-bg1.png'
import logo from '../assets/images/logo.svg';
import eye from '../assets/images/eye.svg';

/* //Login with facebook
const responseFacebook = (response) => {
    console.log(response);
}
const responseGoogle = (response) => {
    console.log(response)
} */

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                nickname: '',
                email: '',
                firstName: '',
                lastName: '',
                gender: '',
                date: '',
                state: '',
                city: '',
                phone: '',
                password: '',
                password_confirmation: '',
                registrationErrors: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.nickname && user.password && user.email && user.state && user.city && user.phone && user.password_confirmation && user.date ) {
            this.props.register(user);
        }
    }


    /* handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const {email, name,surname,date,state,city,
               phone,password,password_confirmation} = this.state;

        axios.post(
            'https://jsonplaceholder.typicode.com/users',{email:email, name:name,
                        surname:surname,date:date,state:state,city:city,phone:phone,
                        password:password,password_confirmation:password_confirmation},
            {withCredentials: true})
            .then(response => {
                //if(response.data.status === '201') {
                    //this.props.handleSuccessfulAuth(response.data)
                    console.log(response)
                //}
            }) 
            .catch(error => {
                console.log("registration error:", error)
            });    
    }
 */
    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div>
            <FilterBackground />
            <Wrapper >
                <Header>
                    <NavLink to="/login"><LoginButton>Войти</LoginButton></NavLink>
                </Header>
                <NavLink to="/"><Logotype /></NavLink>
                <FormWrapper>
                    <FormTitle>Новый аккаунт</FormTitle>
                    <Form onSubmit={this.handleSubmit} >
                        <FormLabel>
                            <FormField  placeholder='Никнейм'
                            type="text"
                            name="nickname"
                            value={user.nickname}
                            onChange={this.handleChange}
                            required='required' />
                        </FormLabel>
                        <FormLabel> 
                            <FormField 
                                type="email"
                                name="email"
                                placeholder="Email почта"
                                value={user.email}
                                onChange={this.handleChange}
                                required='required'
                            />
                        </FormLabel>
                        <FormLabel>
                    <FormField 
                       type="text"
                       name="name"
                       placeholder="Имя"
                       value={user.name}
                       onChange={this.handleChange}
                       required
                    />
                    </FormLabel>
                    <FormLabel>
                    <FormField 
                       type="text"
                       name="surname"
                       placeholder="Фамилия"
                       value={user.surname}
                       onChange={this.handleChange}
                    />
                    </FormLabel>
                    <TwoInOne>
                    <FormLabelSmall>
                    <FormFieldSmall
                       type="date"
                       name="date"
                       placeholder="Дата рождения"
                       value={user.date}
                       onChange={this.handleChange}
                       required='required'
                    />
                    </FormLabelSmall>
                    <FormLabelSmall> 
                    <FormSelect id="defaultFormCardSexEx"
                            className="form-input"            
                            name="Пол" value={user.value} 
                            onChange={this.handleChange}>Пол
                        <option value="none" selected>Не выбрано</option>
                        <option value="male">Мужской</option>
                        <option value="female">Женский</option>
                    </FormSelect>
                    </FormLabelSmall>
                    </TwoInOne>
                    <FormLabel>
                    <FormField 
                       type="text"
                       name="state"
                       placeholder="Страна"
                       value={user.state}
                       onChange={this.handleChange}
                       required='required'
                    />
                    </FormLabel>
                    <FormLabel>
                    <FormField 
                       type="text"
                       name="city"
                       placeholder="Город"
                       value={user.city}
                       onChange={this.handleChange}
                    />
                    </FormLabel>
                    <TwoInOne>
                    <FormLabelSmall>
                        <FormSelect
                        name="countryCode" id=""><div>
  <option data-countrycode="GB" value={44} selected>Norway (+47)</option>
  <option data-countrycode="US" value={1}>UK (+44)</option>
  <optgroup label="Other countries">
    <option data-countrycode="DZ" value={213}>Algeria (+213)</option>
    <option data-countrycode="AD" value={376}>Andorra (+376)</option>
    <option data-countrycode="AO" value={244}>Angola (+244)</option>
    <option data-countrycode="AI" value={1264}>Anguilla (+1264)</option>
    <option data-countrycode="AG" value={1268}>Antigua &amp; Barbuda (+1268)</option>
    <option data-countrycode="AR" value={54}>Argentina (+54)</option>
    <option data-countrycode="AM" value={374}>Armenia (+374)</option>
    <option data-countrycode="AW" value={297}>Aruba (+297)</option>
    <option data-countrycode="AU" value={61}>Australia (+61)</option>
    <option data-countrycode="AT" value={43}>Austria (+43)</option>
    <option data-countrycode="AZ" value={994}>Azerbaijan (+994)</option>
    <option data-countrycode="BS" value={1242}>Bahamas (+1242)</option>
    <option data-countrycode="BH" value={973}>Bahrain (+973)</option>
    <option data-countrycode="BD" value={880}>Bangladesh (+880)</option>
    <option data-countrycode="BB" value={1246}>Barbados (+1246)</option>
    <option data-countrycode="BY" value={375}>Belarus (+375)</option>
    <option data-countrycode="BE" value={32}>Belgium (+32)</option>
    <option data-countrycode="BZ" value={501}>Belize (+501)</option>
    <option data-countrycode="BJ" value={229}>Benin (+229)</option>
    <option data-countrycode="BM" value={1441}>Bermuda (+1441)</option>
    <option data-countrycode="BT" value={975}>Bhutan (+975)</option>
    <option data-countrycode="BO" value={591}>Bolivia (+591)</option>
    <option data-countrycode="BA" value={387}>Bosnia Herzegovina (+387)</option>
    <option data-countrycode="BW" value={267}>Botswana (+267)</option>
    <option data-countrycode="BR" value={55}>Brazil (+55)</option>
    <option data-countrycode="BN" value={673}>Brunei (+673)</option>
    <option data-countrycode="BG" value={359}>Bulgaria (+359)</option>
    <option data-countrycode="BF" value={226}>Burkina Faso (+226)</option>
    <option data-countrycode="BI" value={257}>Burundi (+257)</option>
    <option data-countrycode="KH" value={855}>Cambodia (+855)</option>
    <option data-countrycode="CM" value={237}>Cameroon (+237)</option>
    <option data-countrycode="CA" value={1}>Canada (+1)</option>
    <option data-countrycode="CV" value={238}>Cape Verde Islands (+238)</option>
    <option data-countrycode="KY" value={1345}>Cayman Islands (+1345)</option>
    <option data-countrycode="CF" value={236}>Central African Republic (+236)</option>
    <option data-countrycode="CL" value={56}>Chile (+56)</option>
    <option data-countrycode="CN" value={86}>China (+86)</option>
    <option data-countrycode="CO" value={57}>Colombia (+57)</option>
    <option data-countrycode="KM" value={269}>Comoros (+269)</option>
    <option data-countrycode="CG" value={242}>Congo (+242)</option>
    <option data-countrycode="CK" value={682}>Cook Islands (+682)</option>
    <option data-countrycode="CR" value={506}>Costa Rica (+506)</option>
    <option data-countrycode="HR" value={385}>Croatia (+385)</option>
    <option data-countrycode="CU" value={53}>Cuba (+53)</option>
    <option data-countrycode="CY" value={90392}>Cyprus North (+90392)</option>
    <option data-countrycode="CY" value={357}>Cyprus South (+357)</option>
    <option data-countrycode="CZ" value={42}>Czech Republic (+42)</option>
    <option data-countrycode="DK" value={45}>Denmark (+45)</option>
    <option data-countrycode="DJ" value={253}>Djibouti (+253)</option>
    <option data-countrycode="DM" value={1809}>Dominica (+1809)</option>
    <option data-countrycode="DO" value={1809}>Dominican Republic (+1809)</option>
    <option data-countrycode="EC" value={593}>Ecuador (+593)</option>
    <option data-countrycode="EG" value={20}>Egypt (+20)</option>
    <option data-countrycode="SV" value={503}>El Salvador (+503)</option>
    <option data-countrycode="GQ" value={240}>Equatorial Guinea (+240)</option>
    <option data-countrycode="ER" value={291}>Eritrea (+291)</option>
    <option data-countrycode="EE" value={372}>Estonia (+372)</option>
    <option data-countrycode="ET" value={251}>Ethiopia (+251)</option>
    <option data-countrycode="FK" value={500}>Falkland Islands (+500)</option>
    <option data-countrycode="FO" value={298}>Faroe Islands (+298)</option>
    <option data-countrycode="FJ" value={679}>Fiji (+679)</option>
    <option data-countrycode="FI" value={358}>Finland (+358)</option>
    <option data-countrycode="FR" value={33}>France (+33)</option>
    <option data-countrycode="GF" value={594}>French Guiana (+594)</option>
    <option data-countrycode="PF" value={689}>French Polynesia (+689)</option>
    <option data-countrycode="GA" value={241}>Gabon (+241)</option>
    <option data-countrycode="GM" value={220}>Gambia (+220)</option>
    <option data-countrycode="GE" value={7880}>Georgia (+7880)</option>
    <option data-countrycode="DE" value={49}>Germany (+49)</option>
    <option data-countrycode="GH" value={233}>Ghana (+233)</option>
    <option data-countrycode="GI" value={350}>Gibraltar (+350)</option>
    <option data-countrycode="GR" value={30}>Greece (+30)</option>
    <option data-countrycode="GL" value={299}>Greenland (+299)</option>
    <option data-countrycode="GD" value={1473}>Grenada (+1473)</option>
    <option data-countrycode="GP" value={590}>Guadeloupe (+590)</option>
    <option data-countrycode="GU" value={671}>Guam (+671)</option>
    <option data-countrycode="GT" value={502}>Guatemala (+502)</option>
    <option data-countrycode="GN" value={224}>Guinea (+224)</option>
    <option data-countrycode="GW" value={245}>Guinea - Bissau (+245)</option>
    <option data-countrycode="GY" value={592}>Guyana (+592)</option>
    <option data-countrycode="HT" value={509}>Haiti (+509)</option>
    <option data-countrycode="HN" value={504}>Honduras (+504)</option>
    <option data-countrycode="HK" value={852}>Hong Kong (+852)</option>
    <option data-countrycode="HU" value={36}>Hungary (+36)</option>
    <option data-countrycode="IS" value={354}>Iceland (+354)</option>
    <option data-countrycode="IN" value={91}>India (+91)</option>
    <option data-countrycode="ID" value={62}>Indonesia (+62)</option>
    <option data-countrycode="IR" value={98}>Iran (+98)</option>
    <option data-countrycode="IQ" value={964}>Iraq (+964)</option>
    <option data-countrycode="IE" value={353}>Ireland (+353)</option>
    <option data-countrycode="IL" value={972}>Israel (+972)</option>
    <option data-countrycode="IT" value={39}>Italy (+39)</option>
    <option data-countrycode="JM" value={1876}>Jamaica (+1876)</option>
    <option data-countrycode="JP" value={81}>Japan (+81)</option>
    <option data-countrycode="JO" value={962}>Jordan (+962)</option>
    <option data-countrycode="KZ" value={7}>Kazakhstan (+7)</option>
    <option data-countrycode="KE" value={254}>Kenya (+254)</option>
    <option data-countrycode="KI" value={686}>Kiribati (+686)</option>
    <option data-countrycode="KP" value={850}>Korea North (+850)</option>
    <option data-countrycode="KR" value={82}>Korea South (+82)</option>
    <option data-countrycode="KW" value={965}>Kuwait (+965)</option>
    <option data-countrycode="KG" value={996}>Kyrgyzstan (+996)</option>
    <option data-countrycode="LA" value={856}>Laos (+856)</option>
    <option data-countrycode="LV" value={371}>Latvia (+371)</option>
    <option data-countrycode="LB" value={961}>Lebanon (+961)</option>
    <option data-countrycode="LS" value={266}>Lesotho (+266)</option>
    <option data-countrycode="LR" value={231}>Liberia (+231)</option>
    <option data-countrycode="LY" value={218}>Libya (+218)</option>
    <option data-countrycode="LI" value={417}>Liechtenstein (+417)</option>
    <option data-countrycode="LT" value={370}>Lithuania (+370)</option>
    <option data-countrycode="LU" value={352}>Luxembourg (+352)</option>
    <option data-countrycode="MO" value={853}>Macao (+853)</option>
    <option data-countrycode="MK" value={389}>Macedonia (+389)</option>
    <option data-countrycode="MG" value={261}>Madagascar (+261)</option>
    <option data-countrycode="MW" value={265}>Malawi (+265)</option>
    <option data-countrycode="MY" value={60}>Malaysia (+60)</option>
    <option data-countrycode="MV" value={960}>Maldives (+960)</option>
    <option data-countrycode="ML" value={223}>Mali (+223)</option>
    <option data-countrycode="MT" value={356}>Malta (+356)</option>
    <option data-countrycode="MH" value={692}>Marshall Islands (+692)</option>
    <option data-countrycode="MQ" value={596}>Martinique (+596)</option>
    <option data-countrycode="MR" value={222}>Mauritania (+222)</option>
    <option data-countrycode="YT" value={269}>Mayotte (+269)</option>
    <option data-countrycode="MX" value={52}>Mexico (+52)</option>
    <option data-countrycode="FM" value={691}>Micronesia (+691)</option>
    <option data-countrycode="MD" value={373}>Moldova (+373)</option>
    <option data-countrycode="MC" value={377}>Monaco (+377)</option>
    <option data-countrycode="MN" value={976}>Mongolia (+976)</option>
    <option data-countrycode="MS" value={1664}>Montserrat (+1664)</option>
    <option data-countrycode="MA" value={212}>Morocco (+212)</option>
    <option data-countrycode="MZ" value={258}>Mozambique (+258)</option>
    <option data-countrycode="MN" value={95}>Myanmar (+95)</option>
    <option data-countrycode="NA" value={264}>Namibia (+264)</option>
    <option data-countrycode="NR" value={674}>Nauru (+674)</option>
    <option data-countrycode="NP" value={977}>Nepal (+977)</option>
    <option data-countrycode="NL" value={31}>Netherlands (+31)</option>
    <option data-countrycode="NC" value={687}>New Caledonia (+687)</option>
    <option data-countrycode="NZ" value={64}>New Zealand (+64)</option>
    <option data-countrycode="NI" value={505}>Nicaragua (+505)</option>
    <option data-countrycode="NE" value={227}>Niger (+227)</option>
    <option data-countrycode="NG" value={234}>Nigeria (+234)</option>
    <option data-countrycode="NU" value={683}>Niue (+683)</option>
    <option data-countrycode="NF" value={672}>Norfolk Islands (+672)</option>
    <option data-countrycode="NP" value={670}>Northern Marianas (+670)</option>
    <option data-countrycode="NO" value={47}>Norway (+47)</option>
    <option data-countrycode="OM" value={968}>Oman (+968)</option>
    <option data-countrycode="PW" value={680}>Palau (+680)</option>
    <option data-countrycode="PA" value={507}>Panama (+507)</option>
    <option data-countrycode="PG" value={675}>Papua New Guinea (+675)</option>
    <option data-countrycode="PY" value={595}>Paraguay (+595)</option>
    <option data-countrycode="PE" value={51}>Peru (+51)</option>
    <option data-countrycode="PH" value={63}>Philippines (+63)</option>
    <option data-countrycode="PL" value={48}>Poland (+48)</option>
    <option data-countrycode="PT" value={351}>Portugal (+351)</option>
    <option data-countrycode="PR" value={1787}>Puerto Rico (+1787)</option>
    <option data-countrycode="QA" value={974}>Qatar (+974)</option>
    <option data-countrycode="RE" value={262}>Reunion (+262)</option>
    <option data-countrycode="RO" value={40}>Romania (+40)</option>
    <option data-countrycode="RU" value={7}>Russia (+7)</option>
    <option data-countrycode="RW" value={250}>Rwanda (+250)</option>
    <option data-countrycode="SM" value={378}>San Marino (+378)</option>
    <option data-countrycode="ST" value={239}>Sao Tome &amp; Principe (+239)</option>
    <option data-countrycode="SA" value={966}>Saudi Arabia (+966)</option>
    <option data-countrycode="SN" value={221}>Senegal (+221)</option>
    <option data-countrycode="CS" value={381}>Serbia (+381)</option>
    <option data-countrycode="SC" value={248}>Seychelles (+248)</option>
    <option data-countrycode="SL" value={232}>Sierra Leone (+232)</option>
    <option data-countrycode="SG" value={65}>Singapore (+65)</option>
    <option data-countrycode="SK" value={421}>Slovak Republic (+421)</option>
    <option data-countrycode="SI" value={386}>Slovenia (+386)</option>
    <option data-countrycode="SB" value={677}>Solomon Islands (+677)</option>
    <option data-countrycode="SO" value={252}>Somalia (+252)</option>
    <option data-countrycode="ZA" value={27}>South Africa (+27)</option>
    <option data-countrycode="ES" value={34}>Spain (+34)</option>
    <option data-countrycode="LK" value={94}>Sri Lanka (+94)</option>
    <option data-countrycode="SH" value={290}>St. Helena (+290)</option>
    <option data-countrycode="KN" value={1869}>St. Kitts (+1869)</option>
    <option data-countrycode="SC" value={1758}>St. Lucia (+1758)</option>
    <option data-countrycode="SD" value={249}>Sudan (+249)</option>
    <option data-countrycode="SR" value={597}>Suriname (+597)</option>
    <option data-countrycode="SZ" value={268}>Swaziland (+268)</option>
    <option data-countrycode="SE" value={46}>Sweden (+46)</option>
    <option data-countrycode="CH" value={41}>Switzerland (+41)</option>
    <option data-countrycode="SI" value={963}>Syria (+963)</option>
    <option data-countrycode="TW" value={886}>Taiwan (+886)</option>
    <option data-countrycode="TJ" value={7}>Tajikstan (+7)</option>
    <option data-countrycode="TH" value={66}>Thailand (+66)</option>
    <option data-countrycode="TG" value={228}>Togo (+228)</option>
    <option data-countrycode="TO" value={676}>Tonga (+676)</option>
    <option data-countrycode="TT" value={1868}>Trinidad &amp; Tobago (+1868)</option>
    <option data-countrycode="TN" value={216}>Tunisia (+216)</option>
    <option data-countrycode="TR" value={90}>Turkey (+90)</option>
    <option data-countrycode="TM" value={7}>Turkmenistan (+7)</option>
    <option data-countrycode="TM" value={993}>Turkmenistan (+993)</option>
    <option data-countrycode="TC" value={1649}>Turks &amp; Caicos Islands (+1649)</option>
    <option data-countrycode="TV" value={688}>Tuvalu (+688)</option>
    <option data-countrycode="UG" value={256}>Uganda (+256)</option>
    {/* <option data-countryCode="GB" value="44">UK (+44)</option> */}
    <option data-countrycode="UA" value={380}>Ukraine (+380)</option>
    <option data-countrycode="AE" value={971}>United Arab Emirates (+971)</option>
    <option data-countrycode="UY" value={598}>Uruguay (+598)</option>
    {/* <option data-countryCode="US" value="1">USA (+1)</option> */}
    <option data-countrycode="UZ" value={7}>Uzbekistan (+7)</option>
    <option data-countrycode="VU" value={678}>Vanuatu (+678)</option>
    <option data-countrycode="VA" value={379}>Vatican City (+379)</option>
    <option data-countrycode="VE" value={58}>Venezuela (+58)</option>
    <option data-countrycode="VN" value={84}>Vietnam (+84)</option>
    <option data-countrycode="VG" value={84}>Virgin Islands - British (+1284)</option>
    <option data-countrycode="VI" value={84}>Virgin Islands - US (+1340)</option>
    <option data-countrycode="WF" value={681}>Wallis &amp; Futuna (+681)</option>
    <option data-countrycode="YE" value={969}>Yemen (North)(+969)</option>
    <option data-countrycode="YE" value={967}>Yemen (South)(+967)</option>
    <option data-countrycode="ZM" value={260}>Zambia (+260)</option>
    <option data-countrycode="ZW" value={263}>Zimbabwe (+263)</option>
  </optgroup>
</div>

                        </FormSelect>
                    </FormLabelSmall>
                    <FormLabelSmall>
                    <FormFieldSmall 
                       type="tel"
                       name="phone"
                       placeholder="Телефон"
                       value={user.phone}
                       onChange={this.handleChange}
                       required='required'
                    />
                    </FormLabelSmall>
                    </TwoInOne>
                    <FormLabel>
                    <FormField 
                       type="password"
                       name="password"
                        placeholder="Пароль"
                       value={user.password}
                       onChange={this.handleChange}
                       required='required'
                    />
                    </FormLabel>
                    <FormLabel>
                    <FormField 
                       type="password"
                       id="defaultFormCardPassConfEx"
                        name="password_confirmation"
                       placeholder="Подтвердите пароль"
                       value={this.state.password_confirmation}
                       onChange={this.handleChange}
                       required
                    />
                    </FormLabel>
                    <FormContinButton>Продолжить</FormContinButton>
                    <FormSocialLine><AuthInformation>Уже есть аккаунт?<Auth><NavLink to="/login"><b>Войти</b></NavLink></Auth></AuthInformation></FormSocialLine>
                    
                    <TermOfUse>Продолжая, вы соглашаетесь с<Auth><b>Условиями использования</b></Auth> и <Auth><b>Политикой конфиденциальности</b></Auth>Survey App</TermOfUse>
                </Form>
                </FormWrapper>
                <footer>
                    <FooterListing>
                        <FooterListingItem><Neobis>Neobis.kg</Neobis></FooterListingItem>
                        <FooterListingItem>ASU design</FooterListingItem>
                        <FooterListingItem>2019</FooterListingItem>
                    </FooterListing>
                </footer>
            </Wrapper>
            </div>
        )
    }
}

const FilterBackground = styled.div`
    width: 100%;
    height: 100%;
    background: url(${background}) no-repeat center/cover;
    filter: blur(4px);
    position: absolute;
    top: 0;
`

const Wrapper = styled.main`
padding-top: 16px;
`

const Header = styled.header`
`

const LoginButton = styled.span`
    font: 16px;
    font-weight: bold;
    color: #373737;
    background: #FFFFFF;
    display: block;
    padding: 4px 0;
    width: 72px;
    border-radius: 10px;
    text-align: center;
    margin-left: 24px;
    cursor: pointer;
`

const Logotype = styled.a`
width: 433px;
height: 44px;
display: block;
margin: 12px auto 24px auto;
background-image: url(${logo});
`
const FormWrapper = styled.div`
    width: 548px;
    background: #FFFFFF;
    border-radius: 10px;
    padding: 17px 18px 26px 18px;
    margin: 0 auto;

`
const FormTitle = styled.h5`
    font-size: 24px;
    color: #373737;
    text-align: center;
    font-weight: 500;
    margin-bottom: 30px;
    padding-top: 20px;
    padding-bottom: 30px;
    border-bottom: 1px solid #E9E9E9;

`
export const Form = styled.form`
    margin-top: 10px;
    display:block;
    margin-left: -650px
`
export const FormLabel = styled.label`
    width: 435px;
    height: 37px;
    margin: 0 auto 20px auto;
    display: block;

    :focus-within:first-child::after,.form_label:focus-within:nth-child(2)::before{
        display: none;
    }

    :first-child::after{
    content: '*';
    color: rgba(255, 0, 0, 0.66);
    font-size: 24px;
    position: absolute;
    left: 430px;
    top: 28%;
    }
    :nth-child(2)::before{
        content: '*';
        color: rgba(255, 0, 0, 0.66);
        font-size: 24px;
        position: absolute;
        left: 430px;
        top: 28%;
        z-index: 1;
    }
    :nth-child(10)::after{
    content: '';
    width: 24px;
    height: 14px;
    position: absolute;
    right: 10px;
    top: 28%;
    background: url(${eye}) no-repeat center/cover;
    }

`
export const FormField = styled.input`
    border-radius: 8px;
    background: #E9E9E9;
    font-size: 16px;
    border: none;
    width: 450px;
    height: 100%;
    padding-left: 20px;
    box-sizing: border-box;

    :focus{
        outline: none;
    }
    ::placeholder {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.5);
    }
`
const FormFieldSmall = styled.input`
    border-radius: 8px;
    background: #E9E9E9;
    font-size: 16px;
    border: none;
    width: 200px;
    height: 100%;
    padding-left: 20px;
    box-sizing: border-box;
    margin-left: 50px

    :focus{
        outline: none;
    }
    ::placeholder {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.5);
    }
`
export const FormLabelSmall = styled.label`
    width: 235px;
    height: 37px;
    margin: 0 auto 20px auto;
    display: block;

    :focus-within:first-child::after,.form_label:focus-within:nth-child(2)::before{
        display: none;
    }

    :first-child::after{
    content: '*';
    color: rgba(255, 0, 0, 0.66);
    font-size: 24px;
    position: absolute;
    left: 430px;
    top: 28%;
    }
    :nth-child(2)::before{
        content: '*';
        color: rgba(255, 0, 0, 0.66);
        font-size: 24px;
        position: absolute;
        left: 430px;
        top: 28%;
        z-index: 1;
    }
    :nth-child(10)::after{
    content: '';
    width: 24px;
    height: 14px;
    position: absolute;
    right: 10px;
    top: 28%;
    background: url(${eye}) no-repeat center/cover;
    }

`
const FormSelect = styled.select`
    border-radius: 8px;
    background: #E9E9E9;
    font-size: 16px;
    border: none;
    width: 230px;
    height: 100%;
    padding-left: 20px;
    box-sizing: border-box;
    margin-left: -30px

    :focus{
        outline: none;
    }
    ::placeholder {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.5);
    }
`

const TwoInOne = styled.div`
display:flex;
flex-wrap:nowrap;
flex-direction: row; 
`

export const FormContinButton = styled.button`
width: 450px;
height: 42px;
background:#FF473A;
border-radius: 10px;
color: #FFFFFF;
border: none;
margin: 0 auto;
display:block;
cursor: pointer;
`
export const FormSocialLine = styled.span`
text-align: center;
display:block;
margin: 23px auto 15px auto;
font-size: 12px;
color:  #373737
font-weight: 500;

    ::before{
        content: '';
        position: absolute;
        left: 50px;
        top: 50%;
        transform: translateY(-50%);
        border: 1px solid #373737;
        width: 171px;
    }

    ::after{
        content: '';
        position: absolute;
        right: 50px;
        top: 50%;
        transform: translateY(-50%);
        border: 1px solid #373737;
        width: 171px;
    }
`

export const AuthInformation = styled.span`
    display: block;
    text-align: center;
    font-size: 10px;
    color: #373737;
    margin-bottom: 11px;
    margin-top: 16px;
`

export const Auth = styled.a`
    text-decoration: none;
    color: #000000;
`

export const TermOfUse = styled.span`
    display: block;
    width: 245px;
    margin: 0 auto;
    font-size: 10px;
    text-align: center;
`

export const FooterListing = styled.ul`
    display: flex;
    width: 190px;
    margin: 20px auto 0 auto;
    justify-content: space-between;
`
export const FooterListingItem = styled.li`
    list-style: none;
    font-weight: 600;
    font-size: 12px;
    color: #FFFFFF;
`
export const Neobis = styled.a`
    color: #00D160;
    text-decoration: none;
`