import {StringUtils} from "../../shared/StringUtils";
export class Eintrag {
  id: string;
  titel: string;
  zeit: Date;

  constructor() {
    this.id = StringUtils.generiereUUID();
  }
}
