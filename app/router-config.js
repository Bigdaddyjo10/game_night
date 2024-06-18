import { ExamplesController } from "./controllers/ExamplesController.js";
import { PlayersController } from "./controllers/PlayersController.js";
import { HomeController } from "./controllers/HomeController.js";

import { Router } from "./utils/Router.js";

export const router = new Router([
  {
    path: '',
    controllers: [HomeController, ExamplesController, PlayersController],
    view: /*html*/`
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="card-body py-5">
            <button class="btn btn-danger" onclick="app.PlayersController.addScore()" >Click me!</button>
            <p>Score: <span id="score"></span>0</p>
          </div>

        </div>
      </div>
    </div>
    `
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }

])