import './footer.css';
import './assets/logo.png';

export const footer = () => {
  const footer = document.createElement('footer') as HTMLElement;
  footer.innerHTML = `This project was developed by
            <a
              href="https://github.com/yuliamasliak"
              class="links"
              >Yulia Masliak</a
            ><br />July 2023, Ukraine`;
  const logoLink = document.createElement('a') as HTMLAnchorElement;
  logoLink.href = 'https://rs.school/';
  const logo = document.createElement('img') as HTMLImageElement;
  logo.src = './assets/logo.png';
  logoLink.append(logo);
  footer.append(logoLink);
  return footer;
};
