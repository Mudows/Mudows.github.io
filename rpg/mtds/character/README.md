# MTDS Character Generator Tasklist

A comprehensive list of things to fix or improve in the current iteration of the <a href="https://mudows.github.io/rpg/mtds/character/chargen.html" target="_blank">Character Generator</a>. New features will only be included if needed in order to fix something.

## :fire: High Priority
<details>
<summary>:bug: Bugs to Fix</summary>

- [x] If the user clicks the value of the skill instead of the name, the function won't update the number of available choices properly and wont't remove the flag that indicates it was chosen as either good or bad skill;
- [x] When removing the 'good' or 'bad' flag from skills to reset it to 'normal', the counter of available Good and Bad skill choices do not update. It only updates after choosing a new Good or Bad skill;
- [ ] ~~When setting attribute points, if you have already spent all points but need to subtract point to relocate, instead of subtracting only 1, it subtracts 2;~~
- [x] If the name of the character is the last thing to be chosen to create the character, the 'Finalizar' button do not enable unless atribute points are relocated or skills are changed;
</details>
<br>

## :snowflake: Low Priority
<details>
<summary>:heavy_dollar_sign: JavaScript</summary>

- [ ] Convert the code from vanilla to full jQuery;
- [ ] Clean up unecessary repetitions;
- [ ] Create logic to limit the current value of the attributes and health to not go negative or past the maximum value stabilished;
- [ ] Create logic to disallow the user to input a value directly in the attribute. Creating '+' and '-' buttons might be a good solution;
</details>

<details>
<summary>:art: CSS</summary>

- [ ] Fix the display of the skills on mobile devices;
- [ ] Align the 'Finalizar' button properly;
- [ ] Select a color palette for the project;
- [ ] Format the page header;
</details>

<!-- <details>
<summary></summary>

</details> -->
