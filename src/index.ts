import { i18n } from "@lingui/core";
import { t } from "@lingui/macro";

import { messages } from "../locale/pt-br/messages";

i18n.load("pt-br", messages);
i18n.activate("pt-br");

const element = document.createElement("div");

element.innerHTML = t`Hello world!`;

document.body.append(element);
