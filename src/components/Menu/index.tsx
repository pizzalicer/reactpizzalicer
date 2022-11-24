import { AiOutlineHome } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "hooks/authHook";

const Menu = () => {
    const { user, signOut } = useAuth()
    const navigate = useNavigate();
    async function logout() {
      await signOut()
      navigate('/login')
    }
    return (
      <S.Cabecalho>
        <picture>
          <Link to="/">
            <AiOutlineHome />
          </Link>
        </picture>
        <nav>
          {
            user ? (
              <ul>
                <li>FOFOCAS</li>
                <li>MODA</li>
                <li>BELEZA</li>
                <li>QUEST</li>
                <li>
                  <Link to="/adm/message">MENSAGEM</Link>
                </li>
                <div>
                    <li>
                        <button onClick={logout}>{user.name} <GrLogout /></button>
                    </li>
                </div>
              </ul>
            ) : (
              <ul>
                <li>FOFOCAS</li>
                <li>MODA</li>
                <li>BELEZA</li>
                <li>QUEST</li>
                <li>
                  <Link to="/login">LOGIN</Link>
                </li>
                <li>
                  <Link to="/cadastrar">CADASTRAR</Link>
                </li>
              </ul>
            )
          }
        </nav>
      </S.Cabecalho >
    );
  };
  export default Menu;