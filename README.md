# fellowship-db

Fellowship game data in typescript.

## Generating

To generate your own data, you must first export the games JSON properties using FModel.

Once you've done so, create a `.env` file matching the `.sample.env` file in this repository, and update the `FMODEL_OUTPUT` property to match the path of the FModel output directory on your computer. Once that is complete, you can run the following commands:

- `gen` is used to generate the data. It supports the following arguments:
  - `gen characters`: Generates data relating to Fellowship's heroes and enemies.
  - `gen lang`: Copies over the games translation files.
- `format` is used to format the data using prettier / eslint.
