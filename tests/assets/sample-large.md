# Sample Markdown

## Markdown Features

### Headings
You can use headings at different levels:

# Level 1 Heading
## Level 2 Heading
### Level 3 Heading
#### Level 4 Heading

### Text Formatting
You can apply various text formatting options:

- **Bold text** using double asterisks
- *Italic text* using single asterisks
- ***Bold and italic*** using triple asterisks
- ~~Strikethrough~~ using double tildes
- `Inline code` using backticks

### Lists

#### Unordered Lists
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3
  - Subitem 3.2
    - Nested subitem

#### Ordered Lists
1. First item
2. Second item
3. Third item

## Code Blocks

### Python Example
```python
def fibonacci(n):
    """Calculate fibonacci number at position n"""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

result = fibonacci(10)
print(f"Result: {result}")
```

## Advanced Features

### Tables
| Feature          | Status   | Notes                 |
|------------------|----------|-----------------------|
| PDF Export       | ✓ Active | Fully functional      |
| HTML Export      | ✓ Active | Supports styling      |

### Blockquotes
> This is a blockquote. It can span multiple lines and is useful for highlighting important information.
>
> You can have multiple paragraphs in a blockquote.


