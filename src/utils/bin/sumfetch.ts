import config from '../../../config.json';

const sevy = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
             @@@@@@@@@@@@@                   sumfetch: summary display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
@@        @@@                        @@     爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@             @@@@@@          @@         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     @@@                        @@@         -----------
        @@@                  @@@ @@          DONATE 
         @|  @@@@@@@@@@@@@@@@   @@           <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
         @|                      @@          <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u>

`;
  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  Kenneth
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ME
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            Yves Kenneth Asuncion
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.resume_url}" target="_blank">Jowa Resume</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       -----------
▐▓                                 ▐▓        CONTACT 
▐▓  I  R E A L L Y  L I K E  Y O U ▐▓       Faceook:   <u><a href="https://facebook.com/${config.social.fb}" target="_blank">facebook.com/${config.social.fb}</a></u>
▐▓                                 ▐▓       Instagram: <u><a href="https://instagram.com/${config.social.ig}" target="_blank">instagram.com/${config.social.ig}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓       Twitter:   <u><a href="https://twitter.com/${config.social.x}" target="_blank">twitter.com/${config.social.x}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓          
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓          
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀           
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  

`;
  }
};

export default sevy;
