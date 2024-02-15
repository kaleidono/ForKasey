// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const pusa = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 12 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' | ';
    }
  }
  return `Welcome, Kasey! Try out these commands or someshit:
\n${c}\n
[tab]: auto-complete command.
clear: clear terminal.\n
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hello, Kasey! I am ${config.name}, your digital slave. Welcome to your personal terminal.`;
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const yes = async (args: string[]): Promise<string> => {
  return `WOW OKAY THAT WAS FAST BUT DAMN, YOU'RE VERY PRETTY. NOW GO TELL ME ON MESSENGER OR SOMESHIT, THANK YOU AND I LOVE YOU <3`;
};

export const no = async (args: string[]): Promise<string> => {
  return `YOU FAILED, KINDLY ANSWER THE TEST AGAIN AND TRY TYPING YES. THANK YOU VERY MUCH :D`;
};

export const maybe = async (args: string[]): Promise<string> => {
  return `IT WAS A YES OR NO QUESTION OKAY? NOW RETHINK YOUR LIFE DECISIONS. JUST KIDDING, I STILL LOVE YOU BUT DAMN >:(`;
};

export const kasey = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=nKYzqA2Vgco', '_blank');
  return `Yes, you know what I said before and I'm dedicating this song to you. Now, you're either stuck here with me or I'm stuck here with you.`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
██╗  ██╗ █████╗ ███████╗███████╗██╗   ██╗                                                                
██║ ██╔╝██╔══██╗██╔════╝██╔════╝╚██╗ ██╔╝                                                                
█████╔╝ ███████║███████╗█████╗   ╚████╔╝                                                                 
██╔═██╗ ██╔══██║╚════██║██╔══╝    ╚██╔╝                                                                  
██║  ██╗██║  ██║███████║███████╗   ██║▄█╗                                                                
╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝╚═╝                                                                
                                                                                                         
██╗    ██╗██╗██╗     ██╗         ██╗   ██╗ ██████╗ ██╗   ██╗    ██████╗ ███████╗                         
██║    ██║██║██║     ██║         ╚██╗ ██╔╝██╔═══██╗██║   ██║    ██╔══██╗██╔════╝                         
██║ █╗ ██║██║██║     ██║          ╚████╔╝ ██║   ██║██║   ██║    ██████╔╝█████╗                           
██║███╗██║██║██║     ██║           ╚██╔╝  ██║   ██║██║   ██║    ██╔══██╗██╔══╝                           
╚███╔███╔╝██║███████╗███████╗       ██║   ╚██████╔╝╚██████╔╝    ██████╔╝███████╗                         
 ╚══╝╚══╝ ╚═╝╚══════╝╚══════╝       ╚═╝    ╚═════╝  ╚═════╝     ╚═════╝ ╚══════╝                         
                                                                                                         
███╗   ███╗██╗   ██╗     ██████╗ ██╗██████╗ ██╗     ███████╗██████╗ ██╗███████╗███╗   ██╗██████╗ ██████╗ 
████╗ ████║╚██╗ ██╔╝    ██╔════╝ ██║██╔══██╗██║     ██╔════╝██╔══██╗██║██╔════╝████╗  ██║██╔══██╗╚════██╗
██╔████╔██║ ╚████╔╝     ██║  ███╗██║██████╔╝██║     █████╗  ██████╔╝██║█████╗  ██╔██╗ ██║██║  ██║  ▄███╔╝
██║╚██╔╝██║  ╚██╔╝      ██║   ██║██║██╔══██╗██║     ██╔══╝  ██╔══██╗██║██╔══╝  ██║╚██╗██║██║  ██║  ▀▀══╝ 
██║ ╚═╝ ██║   ██║       ╚██████╔╝██║██║  ██║███████╗██║     ██║  ██║██║███████╗██║ ╚████║██████╔╝  ██╗   
╚═╝     ╚═╝   ╚═╝        ╚═════╝ ╚═╝╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═══╝╚═════╝   ╚═╝   
                                                                                                         
Type 'pusa' to see the list of available commands.
`;
};
