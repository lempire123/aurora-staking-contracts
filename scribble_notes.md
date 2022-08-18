# Scribble Notes

## Status: 2022-08-18

* Example Scribble annotations have been added to `contracts/Treasury.sol`.
* A broken macro file example exists at `contracts/macros/Treasury.yaml`.


## Using Scribble

### setup

Before using Scribble, you need to install it, of course.

    $ npm install -g eth-scribble

#### simplified CLI setup

If you wish to use my script(S) for the simplified CLI workflow, you'll need to
copy them into a directory within your $PATH.  You may find the scripts in the
[apotheon/devutil project](https://github.com/apotheon/devutil) on GitHub:

    $ git clone git@github.com:apotheon/devutil.git


### basic standard workflow

Always ensure you disarm contracts before performing any operations that could
alter your files.  It is best to get in the habit of disarming immediately
after every run of your armed tests.


1. Make changes to `Treasury.sol`.

2. Run the `scribble` command to arm `Treasury.sol`:

    $ scribble contracts/Treasury.sol --output-mode files --arm

3. Run tests to see what problems arise from assertion-armed files:

    $ yarn test contracts/Treasury.sol

4. Run the `scribble` command to disarm `Treasury.sol`:

    $ scribble contracts/Treasury.sol --disarm

To employ the simplified CLI workflow, replace some of the above commands as
follows:

* Replace the command in step 2 with this:

    $ denote arm contracts/Treasury.sol

* Replace the command in step 4 with this:

    $ denote disarm contracts/Treasury.sol

The denote command provides general help output via command line options,
including `-h`, `-help`, and `--help`.
