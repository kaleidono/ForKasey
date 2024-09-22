import config from '../../../config.json';

const sevy = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
             @@@@@@@@@@@@@                   sumfetch: summary display
        @@@@               @@@@             -----------
      @@                       @@            ME
    @@                           @@          ${config.name}
  @@                               @@       
 @@                         @@@     @@       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
@@        @@@                        @@     
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@      Faceook:   <u><a href="https://facebook.com/${config.social.fb}" target="_blank">facebook.com/${config.social.fb}</a></u>
  @@           @@        @@        @@       Instagram: <u><a href="https://instagram.com/${config.social.ig}" target="_blank">instagram.com/${config.social.ig}</a></u>
   @@             @@@@@@          @@        Twitter:   <u><a href="https://twitter.com/${config.social.x}" target="_blank">twitter.com/${config.social.x}</a></u>
     @@@                        @@@         
        @@@                  @@@ @@         
         @|  @@@@@@@@@@@@@@@@   @@          
         @|                      @@         

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
▐▓ I LOVE YOU; FOR ALL TIME, ALWAYS▐▓       Faceook:   <u><a href="https://facebook.com/${config.social.fb}" target="_blank">facebook.com/${config.social.fb}</a></u>
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
