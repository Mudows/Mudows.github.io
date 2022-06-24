# Mudow's TriDeath RPG System

The following text is the abstract of this personal project. It may (it will) change through the project development.

## General Stuff
- The goal is to create a application that generates and maintain a character sheet to be used in a tabletop RPG game;
  - Must be mobile focused;
  - Must have all character info in a single screen;
- The character sheet must be saved on locally for this version;
  - Need to use localStorage to save the data;
- There needs to be a section with the sytem's rules;
  - Plain text. No need to be (much) fancy here;
- Also needs a section for the DM with pre-made monsters;
  - 3 monsters;
  - Special abilities;
- It needs to look awesome;
  - Bootstrap with Sass, bebe.

PS.: This is a nice project to use React, but for this first iteration I'm going to use jQuery to practice it more. Will convert it to React in the future.

## Role Page

- First page to be displayed;
- Needs to have a simple welcome message;
- Has two options: Character or Storyteller;
  - Character will lead to <b>character creation</b> and <b>saved charaters</b>;
  - Storyteller will lead to the pre-made monsters;

## Character Page

- Must have a option to create a new character;
- Must show the already saved characters:
  - Name;
  - Max Stats;

## Character Creation

- Input the character name;
- Distribute 100 points between three ability scores:
  - Physical;
  - Mental;
  - Spiritual;
    - All ability scores begin at the minimum value of 20 points;
    - The minimum value cannot be lowered;
    - The maximum value is 100.
- Player must choose 3 skills to be GOOD, 4 to be OK and 2 to be BAD at:
  - Physical Skills:
    - Fight;
    - Athletics;
    - Precision;
  - Mental Skills:
    - Engineering;
    - Academics;
    - Medicine;
  - Spiritual Skills:
    - Curses;
    - Ethereal;
    - Blessings;
  - A GOOD skill ADDS 3 to the roll;
  - A OK skill adds 0 to the roll;
  - A BAD skill SUBTRACTS 3 from the roll;
    - Spiritual skills on this level cannot be used.
- Choose the character gear:
  - Two weapons;
  - One potion;

## Character Sheet
  - Must show the character name (duh!);
  - Must have a bar for each attribute that updates it's length according to is current value;
  - Each attibute must have a button to add a point to it;
  - Each attibute must have a button to subtract a point from it;
  - Must display the skills under their respective attributes;
  - Must show the gear list;

## Storyteller Page
  - Must show the pre-made monsters;
    - Possess the same three attributes;
    - Monsters have special actions, instead of skills, with challenge numbers instead of modifiers;
    - Need only three monsters for this version:
      - Frost Wolves (easy);
      - Frost Undead (normal);
      - The Icy Queen (Challenging);

