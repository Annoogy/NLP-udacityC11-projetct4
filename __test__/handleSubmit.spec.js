import 'regenerator-runtime/runtime';
import "babel-polyfill";
import { handleSubmit } from '../src/client/js/formHandler'

describe("URL checker", () => {
    // test stuff
    
    test("it should handle the submission", () => {
      // actual test
      expect(handleSubmit).toBeDefined();
    });
  });