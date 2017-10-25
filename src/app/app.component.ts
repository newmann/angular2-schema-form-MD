import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '测试angular2-schema-form';

  // The schema that will be used to generate a form
  mySchema = {
    "properties": {
      "email": {
        "type": "string",
        "description": "邮箱",
        "format": "email"
      },
      "password": {
        "type": "string",
        "description": "密码",
        "buttons": [{
          "id": "reset",
          "label": "Reset"
        }]
      },
      "rememberMe": {
        "type": "boolean",
        "default": false,
        "description": "记住我"
      }
    },
    "required": ["email", "password", "rememberMe"],
    "buttons": [{
      "id": "alert", // the id of the action callback
      "label": "Alert !" // the text inside the button
    }]
  };

  // Declare a mapping between action ids and their event listener
  myActions = {
    "alert": (property) => { alert(JSON.stringify(property.value)) },
    "reset": (property) => { property.reset() }
  };

  myModel = {email: " john.doe@example.com"};

}
