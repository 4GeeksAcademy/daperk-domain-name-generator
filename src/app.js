let pronouns = ["the", "our"];
let adjectives = ["great", "big"];
let nouns = ["jogger", "racoon"];

for (let pronoun of pronouns) {
  for (let adjective of adjectives) {
    for (let noun of nouns) {
      let domain = pronoun + adjective + noun + ".com";
      console.log(domain);
    }
  }
}
