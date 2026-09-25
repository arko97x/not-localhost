# Writing useful commit messages

A commit message should help another contributor understand a change months
later, without making them inspect every changed line first.

This project uses a small subset of
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/),
alongside the writing advice in Git's
[SubmittingPatches guide](https://git-scm.com/docs/SubmittingPatches).

## Format

```text
<type>(<optional scope>): <imperative summary>

<optional body explaining why>

<optional issue reference>
```

Examples:

```text
feat(schedule): add week 3 readings
fix(nav): prevent menu overflow on phones
docs(project): clarify submission requirements
build: configure Tailwind CSS
```

## Choose the right type

| Type | Use it for |
| --- | --- |
| `feat` | A new page, component, or user-visible capability |
| `fix` | A bug or incorrect behavior |
| `docs` | Documentation or course-content changes |
| `refactor` | Code restructuring with no behavior change |
| `perf` | A performance improvement |
| `build` | Dependencies or build configuration |
| `style` | Formatting only, not visual-design changes |
| `chore` | Maintenance that fits nowhere above |

The scope is optional. Use a short noun such as `nav`, `schedule`, or `grid`
when it makes the subject more informative.

## Write the subject well

- Describe one logical change. Split unrelated work into separate commits.
- Use the imperative: `add`, `fix`, `remove`, or `clarify`—not `added`,
  `fixes`, or `updating`.
- Complete this sentence: **If applied, this commit will ...**
- Aim for 50 characters; never exceed 72.
- Do not end the subject with a period.
- Be specific. Avoid `updates`, `changes`, `fix stuff`, and `WIP` in shared
  history.

```text
# Weak
update files
fixed the mobile issue

# Better
docs(schedule): add assessment dates
fix(nav): keep menu inside mobile viewport
```

## Add a body only when it helps

Leave one blank line after the subject. Explain context that the diff cannot:

- why the change was needed;
- an important trade-off or rejected alternative;
- migration steps or a breaking change;
- the issue being resolved.

Wrap body text at about 72 characters. Do not narrate every edited file—the
diff already does that.

```text
fix(nav): prevent menu overflow on phones

The menu used a fixed width wider than some viewports. Cap it to the
available width so every navigation item remains reachable.

Closes #12
```

## Before committing

1. Stage only the intended change.
2. Review it with `git diff --staged`.
3. Run the relevant checks.
4. Read the message as someone who did not watch you make the change.

A good message cannot rescue a commit containing several unrelated changes.

## Instructions for LLMs

> [!IMPORTANT]
> LLMs may inspect changes and suggest commit messages, but must never stage,
> commit, amend, or push changes. The human runs every repository-changing
> command.

When asked to draft a commit message:

1. Inspect `git diff --staged` and the recent commit subjects.
2. Describe only the staged change, not other working-tree changes.
3. Infer the change's purpose from evidence; ask if the purpose is ambiguous.
4. Do not invent tests, issue numbers, motivations, or breaking changes.
5. Prefer one precise subject. Add a body only when the reason is not obvious.
6. Return only a proposed message; never run repository-changing commands.
7. Never add AI attribution or generated-by trailers. This includes
   `Co-Authored-By:` lines naming an AI model or tool (for example
   `Co-Authored-By: Claude ... <noreply@anthropic.com>`); remove any such
   line a tool adds by default before suggesting the message.

A useful prompt is:

```text
Read `git diff --staged` and the recent commit history. Draft one Conventional
Commit message for the staged change. Use an imperative subject of at most 50
characters where practical. Add a body only if it explains non-obvious why.
Do not invent context or claim checks that were not run. Do not add
Co-Authored-By or other AI attribution trailers. Do not stage, commit,
amend, or push anything; return only the suggested message.
```

## Further reading

- [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)
- [Git: Submitting Patches](https://git-scm.com/docs/SubmittingPatches)
- [Git commit documentation](https://git-scm.com/docs/git-commit#_discussion)
