import { helper } from "@components/test";

export const Test1 = (): JSX.Element => {
    console.log(helper());
    return <>Hi</>
}

console.log(helper());
