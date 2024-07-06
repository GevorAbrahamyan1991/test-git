import StandartContainer from "./StandartContainer";
import { Typography } from "@material-tailwind/react";
export default function Footer(){
    const content=(
        <>
           <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-[#757575] text-sm font-font-Header py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 Essu theme by kotofey. All Rights Reserved.
      </Typography>
      <ul className="flex flex-wrap items-center text-[#757575] gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color=""
            className="transition-colors "
          >
            Get in touch:
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="transition-colors text-[#757575] hover:text-[#053eff] text-sm font-font-Header"
          >
             <a href="https://themes.easysite.by/essu/?style=dark#" target="_blank">
                Facebook
              </a>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="transition-colors text-[#757575] hover:text-[#053eff] text-sm font-font-Header"
          >
              <a href="https://themes.easysite.by/essu/?style=dark#" target="_blank">
                Behance
              </a>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="transition-colors text-[#757575] hover:text-[#ea4c89] text-sm font-font-Header "
          >
            <a href="https://themes.easysite.by/essu/?style=dark#" target="_blank">
            Dribble
              </a>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="transition-colors text-[#757575] hover:text-[#053eff] text-sm font-font-Header"
          >
        <a href="https://themes.easysite.by/essu/?style=dark#" target="_blank">
            Instagram
              </a>

          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="transition-colors text-[#757575]  hover:text-[#34bf49] text-sm font-font-Header"
          >
            <a href="https://themes.easysite.by/essu/?style=dark#" target="_blank">
            500px
              </a>
          </Typography>
        </li>
      </ul>
    </footer>
        
        </>
    )
    return <StandartContainer content={content} />
}